import FormData from 'form-data';
import fs from 'fs';
import { attachData } from '../config'

const formData = new FormData();
const buffer = fs.readFileSync(attachData);

formData.append('Content-Type', 'multipart/form-data');
formData.append('file', buffer, attachData);

export { formData };
