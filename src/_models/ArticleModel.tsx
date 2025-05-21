import { DataArticle } from "../utils/dummies/DataArticle";

export interface ArticleInterface {
    id: string,
    date: string,
    slug: string,
    title: string,
    body: string
}

class ArticleModel {
    formatDate(date: any) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' } as any;
        return new Date(date).toLocaleDateString('en-US', options);
    }

    stripHtmlTags(text: string): string {
        const textStriped = text.replace(/<[^>]*>/g, '');
        const textX = textStriped.trim();
        return textX; // This regular expression removes HTML tags
    }

    summarizeHtmlContent(htmlContent: string, wordLimit = 50) {
        // Hapus semua tag HTML untuk mendapatkan teks bersih
        const plainText = htmlContent.replace(/<[^>]*>/g, '');

        // Pisahkan teks menjadi array kata
        const words = plainText.split(' ');

        // Periksa apakah jumlah kata lebih kecil dari batas yang ditentukan
        if (words.length <= wordLimit) {
            return plainText; // Jika teks lebih pendek dari batas, kembalikan seluruh teks
        }

        // Gabungkan kata sampai batas kata yang ditentukan, tambahkan "..." di akhir
        const summary = words.slice(0, wordLimit).join(' ') + '...';

        return summary;
    }


    findBySlug(slug: string) {
        const currentData = DataArticle;
        console.log("Searching for slug:", slug); // Log the search slug
        console.log("Available data:", currentData); // Log data content
        const article = currentData ? currentData.find((article) => article.slug === slug) : null;
        return article;
    }
}

export default new ArticleModel();