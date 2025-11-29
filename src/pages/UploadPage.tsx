import { useState, useCallback, useEffect } from 'react';
import { Upload, FileText, CheckCircle, XCircle, Clock, Link as LinkIcon, Code, Sparkles, Zap } from 'lucide-react';
import { storageService, FileMetadata } from '@/shared/services/storage.service';

type UploadedFile = FileMetadata;

export function UploadPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState<'files' | 'url' | 'github'>('files');
  const [urlInput, setUrlInput] = useState('');
  const [repoInput, setRepoInput] = useState('');
  const [files, setFiles] = useState<UploadedFile[]>([]);

  useEffect(() => {
    const savedFiles = storageService.getFiles();
    setFiles(savedFiles);
  }, []);

  const handleFiles = useCallback((fileList: FileList) => {
    const newFiles: UploadedFile[] = Array.from(fileList).map((file, index) => {
      const ext = file.name.split('.').pop()?.toLowerCase() || '';
      const typeMap: Record<string, string> = {
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

    newFiles.forEach((newFileMetadata, index) => {
      const originalFile = fileList[index];
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        if (progress <= 90) {
          setFiles(prev => prev.map(f =>
            f.id === newFileMetadata.id ? { ...f, progress } : f
          ));
        } else {
          clearInterval(interval);

          const uploadedFile = {
            id: newFileMetadata.id,
            name: originalFile.name,
            type: newFileMetadata.type,
            size: (originalFile.size / (1024 * 1024)).toFixed(1) + ' MB',
            uploadedAt: 'Just now',
            progress: 100,
            status: 'success' as const
          };
          storageService.saveFile(uploadedFile);

          setFiles(prev => prev.map(f =>
            f.id === newFileMetadata.id ? { ...f, progress: 100, status: 'success' } : f
          ));
        }
      }, 200 + index * 100);
    });
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

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

    let progress = 0;
    const interval = setInterval(() => {
      progress += 15;
      if (progress <= 100) {
        const status: 'success' | 'uploading' = progress === 100 ? 'success' : 'uploading';
        const updatedFile = { ...newFile, progress, status };
        if (status === 'success') {
          storageService.saveFile(updatedFile);
        }
        setFiles(prev => prev.map(f => f.id === newFile.id ? updatedFile : f));
      } else {
        clearInterval(interval);
      }
    }, 300);

    setUrlInput('');
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

    let progress = 0;
    const interval = setInterval(() => {
      progress += 12;
      if (progress <= 100) {
        const status: 'success' | 'uploading' = progress === 100 ? 'success' : 'uploading';
        const updatedFile = { ...newFile, progress, status };
        if (status === 'success') {
          storageService.saveFile(updatedFile);
        }
        setFiles(prev => prev.map(f => f.id === newFile.id ? updatedFile : f));
      } else {
        clearInterval(interval);
      }
    }, 400);

    setRepoInput('');
  };

  return (
    <div className="ml-64 min-h-screen p-8 bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-3">
            <Sparkles className="w-12 h-12 text-blue-400" />
            Upload Resources
          </h1>
          <p className="text-gray-400 text-lg">Upload books, documents, or import content from URLs and GitHub repositories</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveTab('files')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === 'files'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
          >
            <Upload className="w-5 h-5" />
            Files
          </button>
          <button
            onClick={() => setActiveTab('url')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === 'url'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
          >
            <LinkIcon className="w-5 h-5" />
            URL
          </button>
          <button
            onClick={() => setActiveTab('github')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === 'github'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
          >
            <Code className="w-5 h-5" />
            GitHub
          </button>
        </div>

        {/* Upload Area */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
          {activeTab === 'files' && (
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all ${isDragging
                  ? 'border-blue-500 bg-blue-500/10 scale-105'
                  : 'border-white/20 hover:border-blue-500/50 hover:bg-white/5'
                }`}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className={`w-10 h-10 text-blue-400 ${isDragging ? 'animate-bounce' : ''}`} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Drag & drop your files here</h3>
              <p className="text-gray-400 mb-6">or click to browse from your computer</p>
              <input
                type="file"
                multiple
                onChange={(e) => e.target.files && handleFiles(e.target.files)}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-semibold cursor-pointer transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105"
              >
                <Zap className="w-5 h-5 inline mr-2" />
                Browse Files
              </label>
              <div className="flex gap-2 justify-center mt-6 flex-wrap">
                {['PDF', 'EPUB', 'TXT', 'DOCX', 'PPTX', 'Images'].map(type => (
                  <span key={type} className="px-3 py-1 bg-white/5 rounded-lg text-sm text-gray-400">
                    {type}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">Max file size: 50MB</p>
            </div>
          )}

          {activeTab === 'url' && (
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <LinkIcon className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Import from URL</h3>
              <p className="text-gray-400 mb-6 text-center">Paste a link to a document or article</p>
              <div className="flex gap-3">
                <input
                  type="url"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://example.com/document.pdf"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  onKeyPress={(e) => e.key === 'Enter' && handleUrlUpload()}
                />
                <button
                  onClick={handleUrlUpload}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105"
                >
                  Import
                </button>
              </div>
            </div>
          )}

          {activeTab === 'github' && (
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Import from GitHub</h3>
              <p className="text-gray-400 mb-6 text-center">Enter a GitHub repository URL</p>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={repoInput}
                  onChange={(e) => setRepoInput(e.target.value)}
                  placeholder="https://github.com/username/repository"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  onKeyPress={(e) => e.key === 'Enter' && handleGithubUpload()}
                />
                <button
                  onClick={handleGithubUpload}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105"
                >
                  Import
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Uploaded Files */}
        {files.length > 0 && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-blue-400" />
              Recent Uploads
            </h2>
            <div className="space-y-3">
              {files.map((file) => (
                <div key={file.id} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${file.status === 'success' ? 'bg-green-500/20' :
                        file.status === 'error' ? 'bg-red-500/20' : 'bg-blue-500/20'
                      }`}>
                      {file.status === 'success' ? (
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      ) : file.status === 'error' ? (
                        <XCircle className="w-6 h-6 text-red-400" />
                      ) : (
                        <Clock className="w-6 h-6 text-blue-400 animate-spin" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold truncate">{file.name}</div>
                      <div className="text-sm text-gray-400">{file.size}</div>
                    </div>
                    {file.status === 'uploading' && (
                      <div className="w-48">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-400">Uploading...</span>
                          <span className="text-sm font-semibold text-blue-400">{file.progress}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                            style={{ width: `${file.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    {file.status === 'success' && (
                      <span className="text-sm text-green-400 font-semibold">Completed</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
