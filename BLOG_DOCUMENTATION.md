# Blog Next.js - Documentation

## 📋 Overview

Halaman blog modern yang dibangun dengan Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, dan React Bits. UI siap dipakai dan mudah untuk disambung ke database.

## 🎯 Features Implemented

### 1. Routing & Pages ✅

- **`/`** - Homepage dengan link ke blog
- **`/blog`** - Halaman utama blog dengan daftar artikel

### 2. Data Structure ✅

**File: `lib/posts.ts`**

- Type definition `Post` dengan semua field yang diminta
- 10 dummy posts dengan berbagai tanggal dan konten
- Fungsi `getAllPosts()` yang sudah sort by date (terbaru dulu)
- Cover images dari Unsplash
- Avatar authors dari DiceBear

### 3. UI Components (shadcn/ui) ✅

**Installed Components:**

- ✅ Card
- ✅ Badge
- ✅ Button
- ✅ Input
- ✅ Skeleton

**Custom Blog Components:**

- **`PostCard.tsx`** - Card komponen untuk setiap artikel dengan:
  - Cover image (responsive)
  - Title (line-clamp-2)
  - Excerpt (line-clamp-3)
  - Tags badges (max 3 ditampilkan)
  - Meta info (date, reading time, author)
  - Read button dengan hover animation
  - Link ke `/blog/[slug]` (halaman detail belum dibuat)

- **`PostGrid.tsx`** - Responsive grid layout:
  - 1 kolom di mobile
  - 2 kolom di tablet (md)
  - 3 kolom di desktop (lg)

- **`PostListSkeleton.tsx`** - Loading state dengan 6 skeleton cards

### 4. React Bits Integration ✅

**File: `components/react-bits/index.tsx`**

Wrapper komponen dengan fallback otomatis:

#### Component #1: AnimatedHeroText

- **Digunakan di**: Hero section title
- **Purpose**: Animated/gradient text untuk judul "Blog"
- **Fallback**: Beautiful gradient text dengan Tailwind animation

#### Component #2: AnimatedBackground

- **Digunakan di**: Hero section background
- **Purpose**: Subtle animated gradient background
- **Fallback**: CSS gradient animation + grid pattern

#### Component #3: GlowCard

- **Digunakan di**: PostCard wrapper
- **Purpose**: Glow/hover effect pada card
- **Fallback**: Gradient border glow effect

**Cara Aktivasi React Bits:**

```bash
# 1. Lihat komponen yang tersedia
npx shadcn@latest view @react-bits

# 2. Install komponen pilihan (contoh Aurora untuk background)
npx shadcn@latest add @react-bits/Aurora-TS-TW

# 3. Uncomment import di components/react-bits/index.tsx
# 4. Sesuaikan nama komponen dengan yang diinstall
```

### 5. Layout Halaman Blog ✅

#### Hero Section

- **Title**: "Blog" dengan AnimatedHeroText
- **Subtitle**: Deskripsi singkat
- **CTAs**: 2 buttons (Browse Articles, Subscribe)
- **Background**: AnimatedBackground dengan gradient + grid pattern

#### Search Section

- Input search dengan icon
- Filter real-time di client-side
- Filter by: title, excerpt, tags

#### Content Section

- Responsive grid (1-2-3 koloms)
- Article count display
- Empty state dengan emoji dan clear button
- Smooth loading dengan skeleton

#### Newsletter Section

- Optional CTA di bottom
- Email input + Subscribe button
- Ready untuk integrasi

### 6. Loading State ✅

- Skeleton ditampilkan 600ms saat pertama load
- Simulasi loading dengan `useEffect` + `setTimeout`
- 6 skeleton cards yang match dengan design PostCard

## 🎨 Styling & Design

### Custom Animations

**File: `app/globals.css`**

```css
- animate-gradient (3s, fast)
- animate-gradient-slow (8s, slow)
- Grid background pattern
```

### Color Scheme

- Menggunakan CSS Variables dari shadcn/ui
- Support dark mode
- Gradient colors: blue-50, purple-50, pink-50
- Border glow: pink-600 to purple-600

### Responsive Breakpoints

- Mobile: < 768px (1 kolom)
- Tablet: 768px - 1024px (2 kolom)
- Desktop: > 1024px (3 kolom)

## 📁 File Structure

```
app/
├── (root)/
│   └── page.tsx              # Homepage dengan link ke blog
├── blog/
│   └── page.tsx              # Halaman utama blog
└── globals.css               # Custom animations

lib/
└── posts.ts                  # Type definitions + dummy data

components/
├── blog/
│   ├── PostCard.tsx         # Card komponen artikel
│   ├── PostGrid.tsx         # Grid layout responsive
│   └── PostListSkeleton.tsx # Loading skeleton
├── react-bits/
│   └── index.tsx            # React Bits wrapper + fallback
└── ui/
    ├── card.tsx
    ├── badge.tsx
    ├── button.tsx
    ├── input.tsx
    └── skeleton.tsx
```

## 🔧 Configuration

### Next.js Config

**File: `next.config.ts`**

- Remote images dari Unsplash enabled
- Remote images dari DiceBear enabled

### Components Config

**File: `components.json`**

- React Bits registry: `https://reactbits.dev/r/{name}.json`
- Icon library: lucide-react

## 🚀 Next Steps (Untuk Production)

### Database Integration

1. **Replace dummy data** di `lib/posts.ts`:

   ```typescript
   // Ganti dengan:
   export async function getAllPosts() {
     const posts = await db.query.posts.findMany({
       orderBy: (posts, { desc }) => [desc(posts.date)],
     });
     return posts;
   }
   ```

2. **Add Server Component** untuk data fetching:
   ```typescript
   // app/blog/page.tsx
   export default async function BlogPage() {
     const posts = await getAllPosts(); // Server-side
     return <BlogClient posts={posts} />;
   }
   ```

### Additional Features

- [ ] Pagination atau Infinite Scroll
- [ ] Filter by tags
- [ ] Sort options (date, popularity)
- [ ] Detail article page (`/blog/[slug]`)
- [ ] Related articles
- [ ] Share buttons
- [ ] Reading progress bar
- [ ] Comments system
- [ ] Newsletter integration (API route)
- [ ] RSS feed
- [ ] Sitemap
- [ ] OG images

### SEO Optimization

- [ ] Add metadata to blog page
- [ ] Add JSON-LD structured data
- [ ] Add canonical URLs
- [ ] Optimize images (blur placeholders)

### Performance

- [ ] Image optimization (WebP)
- [ ] Lazy loading untuk images
- [ ] Code splitting
- [ ] ISR (Incremental Static Regeneration)

## 🎭 React Bits Customization

Jika ingin mengaktifkan React Bits yang sebenarnya:

### Option 1: Aurora Background

```bash
npx shadcn@latest add @react-bits/Aurora-TS-TW
```

Edit `components/react-bits/index.tsx`:

```typescript
import Aurora from "@/components/react-bits/Aurora-TS-TW";
const BackgroundComponent = Aurora;
```

### Option 2: DarkVeil Background

```bash
npx shadcn@latest add @react-bits/DarkVeil-TS-TW
```

### Option 3: Silk Background

```bash
npx shadcn@latest add @react-bits/Silk-TS-TW
```

## 📝 Notes

1. **TypeScript**: Semua file type-safe, no `any` types
2. **Icons**: Menggunakan lucide-react (sudah include di shadcn/ui)
3. **Images**: Remote images dari Unsplash dan DiceBear API
4. **Search**: Client-side only (untuk production, pindah ke server/API)
5. **Responsive**: Tested di mobile, tablet, dan desktop
6. **Dark Mode**: Support otomatis dari shadcn/ui theme

## 🐛 Troubleshooting

### Images tidak muncul

- Cek `next.config.ts` sudah ada remote patterns
- Cek internet connection untuk load dari Unsplash

### React Bits tidak muncul

- Itu normal! Fallback otomatis digunakan
- Install komponen React Bits jika ingin mengaktifkan
- Uncomment import di `components/react-bits/index.tsx`

### Build error

- Jalankan: `npm run build` untuk cek error
- Fix TypeScript errors jika ada

## 📦 Dependencies

**Already Installed:**

- next
- react
- typescript
- tailwindcss
- shadcn/ui components
- lucide-react (icons)

**Ready to Install (when needed):**

- Database ORM (Prisma, Drizzle)
- Content Management (Contentlayer, MDX)
- Analytics (Vercel Analytics)

---

**Status**: ✅ Ready to use!
**Last Updated**: February 2, 2026
