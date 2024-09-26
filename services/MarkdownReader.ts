import { promises as fs } from 'fs'
import path from 'path'

export default async function MarkdownReader(file: string): Promise<string>
{
    const __dirname = path.resolve();
    const filePath = path.join(__dirname, file);

    let markdown = await fs.readFile(filePath, 'utf8');

    return convertMarkdownToHTML(markdown)
}

function convertMarkdownToHTML(markdown: string): string {
    // Conversión básica de Markdown a HTML
    let html = markdown;

    // Convertir encabezados
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');

    // Convertir texto en negrita
    html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');

    // Convertir texto en cursiva
    html = html.replace(/\*(.*)\*/gim, '<em>$1</em>');

    // Convertir listas no ordenadas
    html = html.replace(/^\s*\n\* (.*)/gim, '<ul>\n<li>$1</li>\n</ul>');

    // Convertir enlaces
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>");

    // Convertir saltos de línea a <br>
    html = html.replace(/\n/gim, '<br>');

    return html.trim();
}