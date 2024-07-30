import MarkdownReader from "../services/MarkdownReader.js";

export async function index() {
    try {
       return MarkdownReader('README.md')
    } catch (error) {
        throw new Error('Page not available')
    }
}// arreglar esto y acomodar la doc del readme