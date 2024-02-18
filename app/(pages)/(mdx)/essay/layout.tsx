export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/themes/prism-okaidia.min.css"
      />

      <article className="max-w-xl mx-auto prose-p:text-[15px]">
        {children}
      </article>
    </>
  );
}
