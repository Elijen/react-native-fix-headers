import glob from 'glob'
import xcode from 'xcode'

glob("../*", {}, (files) => {
  console.log(files);
});