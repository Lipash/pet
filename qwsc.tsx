// API-маршрут для отправки файла
import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.resolve('.', 'path/to/your/file.txt') // Замените на путь к вашему файлу
  const file = fs.createReadStream(filePath)

  res.setHeader('Content-Type', 'application/octet-stream')
  res.setHeader('Content-Disposition', 'attachment; filename=file.txt') // Замените на имя вашего файла

  file.pipe(res)
}

// Компонент кнопки
const DownloadButton = () => {
  const handleClick = () => {
    window.location.href = '/api/download' // Замените на путь к вашему API-маршруту
  }

  return <button onClick={handleClick}>Скачать файл</button>
}

export default DownloadButton
