
const fs = require('fs');
const path = require('path');

// 设置需要批量修改后缀名的根目录
const rootDirectory = './src';

// 设置原始后缀名和目标后缀名
const originalExt = '.ts';
const targetExt = '.js';

function renameFilesInDirectory(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('读取目录出错:', err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(directoryPath, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('获取文件状态出错:', err);
          return;
        }

        if (stats.isDirectory()) {
          renameFilesInDirectory(filePath); // 如果是目录，递归处理
        } else if (file.endsWith(originalExt)) {
          fs.rename(filePath, filePath.replace(originalExt, targetExt), err => {
            if (err) {
              console.error(`修改文件名失败: ${file}`, err);
            } else {
              console.log(`文件名已修改: ${file}`);
            }
          });
        }
      });
    });
  });
}

renameFilesInDirectory(rootDirectory);