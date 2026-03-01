import { createClient } from 'microcms-js-sdk';

// microCMS クライアント（環境変数が設定されていない場合はダミーデータを使用）
const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.MICROCMS_API_KEY;

export const client = serviceDomain && apiKey
    ? createClient({ serviceDomain, apiKey })
    : null;

// ─── Types ───────────────────────────────────────────────
export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    thumbnail?: { url: string; width: number; height: number };
    body: string;
    category: string;
    publishedAt: string;
}

export interface Work {
    id: string;
    title: string;
    image?: { url: string; width: number; height: number };
    description: string;
    category: string;
    url?: string;
    date: string;
}

// ─── Dummy Data ───────────────────────────────────────────
export const dummyPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Astroで作るポートフォリオサイトのすすめ',
        slug: 'astro-portfolio',
        thumbnail: { url: 'https://picsum.photos/seed/blog1/800/450', width: 800, height: 450 },
        body: '<p>Astroは静的サイトジェネレーターの中でも特に軽量で高速なフレームワークです。</p><p>本記事では、Astroを使ったポートフォリオサイトの構築方法を詳しく解説します。Astroの最大の特徴は「Islands Architecture」と呼ばれるアーキテクチャで、必要な箇所だけJavaScriptをハイドレーションする仕組みを持っています。</p><h2>なぜAstroを選ぶのか</h2><p>パフォーマンスを最優先に考えたとき、Astroは最良の選択肢の一つです。デフォルトでJavaScriptを送信しないため、Core Web Vitalsのスコアが非常に高くなります。</p>',
        category: '技術',
        publishedAt: '2025-12-01T09:00:00.000Z',
    },
    {
        id: '2',
        title: 'デザインとコードの橋渡し：Figmaからの実装フロー',
        slug: 'figma-to-code',
        thumbnail: { url: 'https://picsum.photos/seed/blog2/800/450', width: 800, height: 450 },
        body: '<p>FigmaのデザインをHTMLとCSSに落とし込む際のベストプラクティスを紹介します。</p><h2>デザイントークンの重要性</h2><p>色・タイポグラフィ・スペーシングをデザイントークンとして管理することで、一貫したUI実装が可能になります。</p>',
        category: 'デザイン',
        publishedAt: '2025-11-15T09:00:00.000Z',
    },
    {
        id: '3',
        title: 'microCMSでヘッドレスCMSを始める',
        slug: 'microcms-intro',
        thumbnail: { url: 'https://picsum.photos/seed/blog3/800/450', width: 800, height: 450 },
        body: '<p>microCMSは日本製のヘッドレスCMSです。APIベースでコンテンツを管理でき、フロントエンドのフレームワークを問わず使用できます。</p>',
        category: '技術',
        publishedAt: '2025-11-01T09:00:00.000Z',
    },
    {
        id: '4',
        title: 'Tailwind CSS v4 の新機能をまとめてみた',
        slug: 'tailwindcss-v4',
        thumbnail: { url: 'https://picsum.photos/seed/blog4/800/450', width: 800, height: 450 },
        body: '<p>Tailwind CSS v4がリリースされ、設定方法が大きく変わりました。CSS-first設定や新しいプロパティについてまとめます。</p>',
        category: '技術',
        publishedAt: '2025-10-20T09:00:00.000Z',
    },
    {
        id: '5',
        title: 'ポートフォリオに載せるべき作品の選び方',
        slug: 'portfolio-works-selection',
        thumbnail: { url: 'https://picsum.photos/seed/blog5/800/450', width: 800, height: 450 },
        body: '<p>フリーランスや転職を目指すWebデザイナー・エンジニアにとって、ポートフォリオの質は非常に重要です。</p>',
        category: 'キャリア',
        publishedAt: '2025-10-05T09:00:00.000Z',
    },
    {
        id: '6',
        title: 'Web制作で使える無料デザインリソース10選',
        slug: 'free-design-resources',
        thumbnail: { url: 'https://picsum.photos/seed/blog6/800/450', width: 800, height: 450 },
        body: '<p>質の高いデザインを素早く実現するための、おすすめの無料リソースを厳選して紹介します。</p>',
        category: 'デザイン',
        publishedAt: '2025-09-20T09:00:00.000Z',
    },
    {
        id: '7',
        title: 'Netlifyで静的サイトをかんたん公開',
        slug: 'netlify-deploy',
        thumbnail: { url: 'https://picsum.photos/seed/blog7/800/450', width: 800, height: 450 },
        body: '<p>GitHubと連携してNetlifyにサイトをデプロイする方法を解説します。CI/CDも自動化できます。</p>',
        category: '技術',
        publishedAt: '2025-09-01T09:00:00.000Z',
    },
];

export const dummyWorks: Work[] = [
    {
        id: '1',
        title: 'HORIZON — コーポレートサイト',
        image: { url: 'https://picsum.photos/seed/work1/800/600', width: 800, height: 600 },
        description: 'スタートアップ企業向けのコーポレートサイト。ブランドの世界観を大切にしたミニマルデザイン。',
        category: 'Web Design',
        url: '#',
        date: '2025-11-01T00:00:00.000Z',
    },
    {
        id: '2',
        title: 'BLOOM — ECサイト',
        image: { url: 'https://picsum.photos/seed/work2/800/600', width: 800, height: 600 },
        description: 'ナチュラルコスメブランドのECサイト。使いやすいUI/UXと温かみのあるビジュアルを実現。',
        category: 'Web Design',
        url: '#',
        date: '2025-09-15T00:00:00.000Z',
    },
    {
        id: '3',
        title: 'KINETIC — ランディングページ',
        image: { url: 'https://picsum.photos/seed/work3/800/600', width: 800, height: 600 },
        description: 'フィットネスアプリのランディングページ。スクロールアニメーションで魅力を最大限に訴求。',
        category: 'Development',
        url: '#',
        date: '2025-08-01T00:00:00.000Z',
    },
    {
        id: '4',
        title: 'NAVI — ダッシュボードUI',
        image: { url: 'https://picsum.photos/seed/work4/800/600', width: 800, height: 600 },
        description: 'SaaSプロダクトのダッシュボード。データの可視化と操作性を両立したUI設計。',
        category: 'UI/UX',
        url: '#',
        date: '2025-07-01T00:00:00.000Z',
    },
    {
        id: '5',
        title: 'ZEN — ブログサイト',
        image: { url: 'https://picsum.photos/seed/work5/800/600', width: 800, height: 600 },
        description: '読書体験を大切にした、コンテンツファーストなブログデザイン。',
        category: 'Web Design',
        url: '#',
        date: '2025-05-15T00:00:00.000Z',
    },
    {
        id: '6',
        title: 'PULSE — モバイルアプリUI',
        image: { url: 'https://picsum.photos/seed/work6/800/600', width: 800, height: 600 },
        description: '健康管理モバイルアプリのUIデザイン。直感的な操作フローとグラフ表示を設計。',
        category: 'UI/UX',
        url: '#',
        date: '2025-04-01T00:00:00.000Z',
    },
];

// ─── Fetch Functions ──────────────────────────────────────

const POSTS_PER_PAGE = 6;

export async function getBlogPosts(page = 1): Promise<{ posts: BlogPost[]; total: number; totalPages: number }> {
    if (client) {
        try {
            const data = await client.get({
                endpoint: 'blog',
                queries: { limit: POSTS_PER_PAGE, offset: (page - 1) * POSTS_PER_PAGE, orders: '-publishedAt' },
            });
            return {
                posts: data.contents,
                total: data.totalCount,
                totalPages: Math.ceil(data.totalCount / POSTS_PER_PAGE),
            };
        } catch {
            console.error('microCMS fetch error, using dummy data');
        }
    }
    const start = (page - 1) * POSTS_PER_PAGE;
    const posts = dummyPosts.slice(start, start + POSTS_PER_PAGE);
    return { posts, total: dummyPosts.length, totalPages: Math.ceil(dummyPosts.length / POSTS_PER_PAGE) };
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
    if (client) {
        try {
            return await client.get({ endpoint: 'blog', contentId: id });
        } catch { }
    }
    return dummyPosts.find(p => p.id === id) || null;
}

export async function getAllBlogIds(): Promise<string[]> {
    if (client) {
        try {
            const data = await client.get({ endpoint: 'blog', queries: { fields: 'id', limit: 100 } });
            return data.contents.map((p: BlogPost) => p.id);
        } catch { }
    }
    return dummyPosts.map(p => p.id);
}

export async function getWorks(): Promise<Work[]> {
    if (client) {
        try {
            const data = await client.get({ endpoint: 'works', queries: { limit: 100, orders: '-date' } });
            return data.contents;
        } catch { }
    }
    return dummyWorks;
}

export function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('ja-JP', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
}
