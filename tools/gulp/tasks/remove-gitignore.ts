import { src, task, dest } from 'gulp';
import * as clean from 'gulp-clean';

function removeGitignore() {
  return src('./dist/lib/application/files/ts/**/**/.gitignore')
    .pipe(clean())
}

task('remove:gitignore', removeGitignore);