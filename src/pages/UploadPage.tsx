import { useState, useCallback, useEffect } from 'react';
import { Upload, FileText, Link as LinkIcon, Code } from 'lucide-react';
import { storageService, FileMetadata } from '@/shared/services/storage.service';

type UploadedFile = FileMetadata;

export function UploadPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState<'files' | 'url' | 'github'>('files');
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
      };

      return {
        id: Date.now().toString() + index,
        name: file.name,
        type: (typeMap[ext] || 'txt') as FileMetadata['type'],
        size: (file.size / (1024 * 1024)).toFixed(1) + ' MB',
        status: 'uploading' as const,
        progress: 0,
        uploadedAt: 'Just now'
      };
    });

    setFiles(prev => [...newFiles, ...prev]);

    newFiles.forEach((newFileMetadata, index) => {
      // const originalFile = fileList[index];
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
            ...newFileMetadata,
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

  return (
    <div className="min-h-screen p-8 bg-[#000000] text-white">
      <div className="max-w-6xl mx-auto pt-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <UploadCloudIcon />
            <h1 className="text-3xl font-bold">Upload Resources</h1>
          </div>
          <p className="text-gray-400">Upload books, documents, or import content from URLs and GitHub repositories</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('files')}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium transition-all ${activeTab === 'files'
              ? 'bg-[#0066FF] text-white'
              : 'bg-[#111] text-gray-400 hover:bg-[#1A1A1A] border border-white/5'
              }`}
          >
            <Upload className="w-5 h-5" />
            Files
          </button>
          <button
            onClick={() => setActiveTab('url')}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium transition-all ${activeTab === 'url'
              ? 'bg-[#0066FF] text-white'
              : 'bg-[#111] text-gray-400 hover:bg-[#1A1A1A] border border-white/5'
              }`}
          >
            <LinkIcon className="w-5 h-5" />
            URL
          </button>
          <button
            onClick={() => setActiveTab('github')}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium transition-all ${activeTab === 'github'
              ? 'bg-[#0066FF] text-white'
              : 'bg-[#111] text-gray-400 hover:bg-[#1A1A1A] border border-white/5'
              }`}
          >
            <Code className="w-5 h-5" />
            GitHub
          </button>
        </div>

        {/* Upload Area */}
        <div className="border border-dashed border-white/10 rounded-3xl p-1 mb-8" style={{ minHeight: '400px' }}>
          <div
            className={`w-full h-full rounded-[20px] flex flex-col items-center justify-center p-12 transition-all ${isDragging ? 'bg-[#111] border-blue-500' : 'bg-[#050505]'}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {activeTab === 'files' && (
              <>
                <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                  <Upload className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Drag & drop your files here</h3>
                <p className="text-gray-500 mb-8">or click to browse from your computer</p>

                <input
                  type="file"
                  multiple
                  onChange={(e) => e.target.files && handleFiles(e.target.files)}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="px-8 py-3 bg-[#0066FF] hover:bg-blue-600 text-white rounded-lg font-medium cursor-pointer transition-colors"
                >
                  Browse Files
                </label>

                <div className="flex gap-2 mt-8">
                  {['PDF', 'EPUB', 'TXT', 'DOCX', 'PPTX', 'Images'].map(ext => (
                    <span key={ext} className="px-3 py-1 bg-[#111] border border-white/5 rounded text-xs text-gray-500 font-medium">
                      {ext}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-600 mt-4">Max file size: 50MB</p>
              </>
            )}
            {activeTab === 'url' && (
              <div className="w-full max-w-xl text-center">
                <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <LinkIcon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Import from URL</h3>
                <div className="flex gap-2 relative mt-6">
                  <input
                    type="url"
                    placeholder="Paste your link here..."
                    className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                  <button className="px-6 py-3 bg-blue-600 rounded-lg font-medium">Import</button>
                </div>
              </div>
            )}
            {activeTab === 'github' && (
              <div className="w-full max-w-xl text-center">
                <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Code className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Import from GitHub</h3>
                <div className="flex gap-2 relative mt-6">
                  <input
                    type="text"
                    placeholder="username/repository"
                    className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                  <button className="px-6 py-3 bg-blue-600 rounded-lg font-medium">Import</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recent Uploads */}
        {files.length > 0 && (
          <div className="border border-white/10 rounded-2xl p-6 bg-[#0A0A0A]">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Recent Uploads
            </h2>
            <div className="space-y-3">
              {files.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-4 bg-[#111] border border-white/5 rounded-xl hover:bg-[#161616] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <FileText size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-white">{file.name}</div>
                      <div className="text-xs text-gray-500">{file.size} • Uploaded just now</div>
                    </div>
                  </div>
                  <div>
                    {file.status === 'success' ? (
                      <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-medium rounded-full">Processed</span>
                    ) : (
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs font-medium rounded-full">Uploading...</span>
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

function UploadCloudIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud-upload">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>
  )
}
