import { useState, useCallback } from 'react';
import { Upload, FileText, CheckCircle, XCircle, Clock, Link as LinkIcon, Code } from 'lucide-react';

interface UploadedFile {
  id: string;
  name: string;
  type: 'pdf' | 'epub' | 'txt' | 'docx' | 'pptx' | 'image' | 'url' | 'github';
  size: string;
  status: 'uploading' | 'processing' | 'success' | 'error';
  progress: number;
  uploadedAt: string;
}

export function UploadPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState<'files' | 'url' | 'github'>('files');
  const [urlInput, setUrlInput] = useState('');
  const [repoInput, setRepoInput] = useState('');
  const [files, setFiles] = useState<UploadedFile[]>([
    {
      id: '1',
      name: 'Introduction to Psychology.pdf',
      type: 'pdf',
      size: '12.4 MB',
      status: 'success',
      progress: 100,
      uploadedAt: '2 hours ago'
    },
    {
      id: '2',
      name: 'Quantum Physics Basics.epub',
      type: 'epub',
      size: '8.7 MB',
      status: 'success',
      progress: 100,
      uploadedAt: '1 day ago'
    }
  ]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles);
    }
  }, []);

  const handleFiles = (fileList: File[]) => {
    const newFiles: UploadedFile[] = fileList.map((file, index) => {
      const ext = file.name.split('.').pop()?.toLowerCase() || 'txt';
      const typeMap: Record<string, UploadedFile['type']> = {
        pdf: 'pdf',
        epub: 'epub',
        txt: 'txt',
        doc: 'docx',
        docx: 'docx',
        ppt: 'pptx',
        pptx: 'pptx',
        png: 'image',
        jpg: 'image',
        jpeg: 'image',
      };
      
      return {
        id: Date.now().toString() + index,
        name: file.name,
        type: typeMap[ext] || 'txt',
        size: (file.size / (1024 * 1024)).toFixed(1) + ' MB',
        status: 'uploading' as const,
        progress: 0,
        uploadedAt: 'Just now'
      };
    });

    setFiles(prev => [...newFiles, ...prev]);

    // Simulate upload progress
    newFiles.forEach((file, index) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        if (progress <= 100) {
          const status = progress < 100 ? 'uploading' : progress === 100 ? 'processing' : 'success';
          setFiles(prev => prev.map(f => 
            f.id === file.id ? { ...f, progress, status } : f
          ));
        } else {
          setFiles(prev => prev.map(f => 
            f.id === file.id ? { ...f, status: 'success' } : f
          ));
          clearInterval(interval);
        }
      }, 200 + index * 100);
    });
  };

  const handleUrlUpload = () => {
    if (!urlInput.trim()) return;

    const newFile: UploadedFile = {
      id: Date.now().toString(),
      name: urlInput,
      type: 'url',
      size: 'Unknown',
      status: 'uploading',
      progress: 0,
      uploadedAt: 'Just now'
    };

    setFiles(prev => [newFile, ...prev]);
    setUrlInput('');

    // Simulate processing
    let progress = 0;
    const interval = setInterval(() => {
      progress += 15;
      if (progress <= 100) {
        setFiles(prev => prev.map(f => 
          f.id === newFile.id ? { ...f, progress, status: progress === 100 ? 'success' : 'uploading' } : f
        ));
      } else {
        clearInterval(interval);
      }
    }, 300);
  };

  const handleGithubUpload = () => {
    if (!repoInput.trim()) return;

    const newFile: UploadedFile = {
      id: Date.now().toString(),
      name: repoInput,
      type: 'github',
      size: 'Repository',
      status: 'uploading',
      progress: 0,
      uploadedAt: 'Just now'
    };

    setFiles(prev => [newFile, ...prev]);
    setRepoInput('');

    // Simulate processing
    let progress = 0;
    const interval = setInterval(() => {
      progress += 12;
      if (progress <= 100) {
        setFiles(prev => prev.map(f => 
          f.id === newFile.id ? { ...f, progress, status: progress === 100 ? 'success' : 'uploading' } : f
        ));
      } else {
        clearInterval(interval);
      }
    }, 400);
  };

  const getFileIcon = (type: UploadedFile['type']) => {
    switch (type) {
      case 'url':
        return <LinkIcon className="w-6 h-6 text-blue-400" />;
      case 'github':
        return <Code className="w-6 h-6 text-purple-400" />;
      default:
        return <FileText className="w-6 h-6 text-blue-400" />;
    }
  };

  const getStatusColor = (status: UploadedFile['status']) => {
    switch (status) {
      case 'uploading':
        return 'text-yellow-400';
      case 'processing':
        return 'text-blue-400';
      case 'success':
        return 'text-green-400';
      case 'error':
        return 'text-red-400';
    }
  };

  return (
    <div className="ml-64 min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-3">Upload Resources</h1>
          <p className="text-gray-400">
            Upload books, documents, or import content from URLs and GitHub repositories
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-white/5 border border-white/10 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('files')}
            className={`flex-1 px-4 py-3 rounded-lg transition-all ${
              activeTab === 'files' ? 'bg-blue-500 text-white' : 'hover:bg-white/5'
            }`}
          >
            <Upload className="w-4 h-4 inline mr-2" />
            Files
          </button>
          <button
            onClick={() => setActiveTab('url')}
            className={`flex-1 px-4 py-3 rounded-lg transition-all ${
              activeTab === 'url' ? 'bg-blue-500 text-white' : 'hover:bg-white/5'
            }`}
          >
            <LinkIcon className="w-4 h-4 inline mr-2" />
            URL
          </button>
          <button
            onClick={() => setActiveTab('github')}
            className={`flex-1 px-4 py-3 rounded-lg transition-all ${
              activeTab === 'github' ? 'bg-blue-500 text-white' : 'hover:bg-white/5'
            }`}
          >
            <Code className="w-4 h-4 inline mr-2" />
            GitHub
          </button>
        </div>

        {/* Upload Areas */}
        {activeTab === 'files' && (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all ${
              isDragging 
                ? 'border-blue-500 bg-blue-500/10' 
                : 'border-white/20 bg-white/5 hover:border-blue-500/50'
            }`}
          >
            <div className="flex flex-col items-center gap-4">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors ${
                isDragging ? 'bg-blue-500' : 'bg-blue-500/20'
              }`}>
                <Upload className="w-8 h-8 text-blue-400" />
              </div>
              
              <div>
                <h3 className="text-xl mb-2">
                  {isDragging ? 'Drop your files here' : 'Drag & drop your files here'}
                </h3>
                <p className="text-gray-400 mb-4">
                  or click to browse from your computer
                </p>
              </div>

              <label className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg cursor-pointer transition-colors">
                Browse Files
                <input
                  type="file"
                  multiple
                  accept=".pdf,.epub,.txt,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg"
                  onChange={handleFileInput}
                  className="hidden"
                />
              </label>

              <div className="flex flex-wrap gap-2 justify-center text-xs text-gray-500 mt-2">
                <span className="px-3 py-1 bg-white/5 rounded-full">PDF</span>
                <span className="px-3 py-1 bg-white/5 rounded-full">EPUB</span>
                <span className="px-3 py-1 bg-white/5 rounded-full">TXT</span>
                <span className="px-3 py-1 bg-white/5 rounded-full">DOCX</span>
                <span className="px-3 py-1 bg-white/5 rounded-full">PPTX</span>
                <span className="px-3 py-1 bg-white/5 rounded-full">Images</span>
              </div>
              <p className="text-sm text-gray-500">Max file size: 50MB</p>
            </div>
          </div>
        )}

        {activeTab === 'url' && (
          <div className="border-2 border-dashed border-white/20 rounded-2xl p-12 bg-white/5">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <LinkIcon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl mb-2 text-center">Import from URL</h3>
              <p className="text-gray-400 mb-6 text-center">
                Paste a public URL to import content from the web
              </p>
              
              <div className="flex gap-3">
                <input
                  type="url"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://example.com/document.pdf"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={handleUrlUpload}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  Import
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'github' && (
          <div className="border-2 border-dashed border-white/20 rounded-2xl p-12 bg-white/5">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl mb-2 text-center">Import from GitHub</h3>
              <p className="text-gray-400 mb-6 text-center">
                Import documentation from a public GitHub repository
              </p>
              
              <div className="flex gap-3">
                <input
                  type="text"
                  value={repoInput}
                  onChange={(e) => setRepoInput(e.target.value)}
                  placeholder="username/repository"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={handleGithubUpload}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  Import
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">
                Example: facebook/react or torvalds/linux
              </p>
            </div>
          </div>
        )}

        {/* Recently Uploaded */}
        <div className="mt-12">
          <h2 className="text-2xl mb-6">Recently Uploaded</h2>
          
          <div className="space-y-3">
            {files.map(file => (
              <div
                key={file.id}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    {getFileIcon(file.type)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="truncate pr-4">{file.name}</h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {file.status === 'uploading' && (
                          <Clock className="w-5 h-5 text-yellow-400 animate-pulse" />
                        )}
                        {file.status === 'processing' && (
                          <Clock className="w-5 h-5 text-blue-400 animate-spin" />
                        )}
                        {file.status === 'success' && (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        )}
                        {file.status === 'error' && (
                          <XCircle className="w-5 h-5 text-red-400" />
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="uppercase">{file.type}</span>
                      <span>•</span>
                      <span>{file.size}</span>
                      <span>•</span>
                      <span>{file.uploadedAt}</span>
                      {(file.status === 'uploading' || file.status === 'processing') && (
                        <>
                          <span>•</span>
                          <span className={getStatusColor(file.status)}>
                            {file.status === 'uploading' ? 'Uploading' : 'Processing'} {file.progress}%
                          </span>
                        </>
                      )}
                    </div>

                    {(file.status === 'uploading' || file.status === 'processing') && (
                      <div className="mt-3 w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-300 ${
                            file.status === 'uploading' ? 'bg-yellow-500' : 'bg-blue-500'
                          }`}
                          style={{ width: `${file.progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
