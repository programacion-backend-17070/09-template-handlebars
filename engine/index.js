const fs = require('fs').promises;

module.exports = async function (filePath, context, callback) {
  const content = await fs.readFile(filePath)
  const rendered = content.toString()
    .replace('#title#', '' + context.title + '')
    .replace('#message#', '' + context.message + '');
  return callback(null, rendered);
}
