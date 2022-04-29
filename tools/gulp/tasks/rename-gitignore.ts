import { src, task, dest } from 'gulp';
import * as gulpRename from 'gulp-rename';

function renameGitignore() {
  return src('./dist/lib/application/files/ts/**/.gitignore')
    .pipe(gulpRename((path) => {
      console.log(path);
      path.basename = '.template.gitignore';
      return path;
    }))
    .pipe(dest('./dist/lib/application/files/ts'))
}

task('rename:gitignore', renameGitignore);