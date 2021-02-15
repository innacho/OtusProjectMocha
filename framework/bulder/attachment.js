import FormData from 'form-data';
import fs from 'fs';

const filePath = 'testAttach.txt';
const formData = new FormData();
const buffer = fs.readFileSync(filePath);

formData.append('Content-Type', 'multipart/form-data');
formData.append('file', buffer);

export { formData };
