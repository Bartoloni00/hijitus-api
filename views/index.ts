export default function indexView(viewContent: string): string
{
    return `
    <main style="max-width:800px; margin: auto;">
        ${viewContent}
    </main>
    `
}