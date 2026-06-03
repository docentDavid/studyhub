export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-[#faf8ff] px-4 py-8 text-[#17142a] dark:bg-[#0f0b1d] dark:text-white sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[320px_1fr]">
        <aside className="rounded-3xl bg-[#663399] p-8 text-white">
          <p className="mb-3 text-sm font-bold uppercase text-purple-100">
            Contribute
          </p>
          <h1 className="text-4xl font-black tracking-tight">
            Submit a useful source
          </h1>
          <p className="mt-4 leading-7 text-purple-100">
            Share an article, video, tool or guide with other students. Your
            submission will be reviewed before it becomes visible.
          </p>
        </aside>

        <form className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm dark:border-purple-950 dark:bg-[#17142a] md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="font-bold">
              Your name
              <input
                className="mt-2 w-full rounded-2xl border border-purple-100 bg-white p-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white"
                placeholder="Jane Doe"
              />
            </label>

            <label className="font-bold">
              Source title
              <input
                className="mt-2 w-full rounded-2xl border border-purple-100 bg-white p-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white"
                placeholder="Great CSS Grid guide"
              />
            </label>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <label className="font-bold">
              Unit
              <select className="mt-2 w-full rounded-2xl border border-purple-100 bg-white p-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white">
                <option>FED</option>
                <option>IM</option>
                <option>DES</option>
                <option>PROG</option>
                <option>GENERAL</option>
              </select>
            </label>

            <label className="font-bold">
              Semester
              <select className="mt-2 w-full rounded-2xl border border-purple-100 bg-white p-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white">
                <option>Semester 1</option>
                <option>Semester 2</option>
                <option>Semester 3</option>
                <option>Semester 4</option>
              </select>
            </label>

            <label className="font-bold">
              Type
              <select className="mt-2 w-full rounded-2xl border border-purple-100 bg-white p-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white">
                <option>external-source</option>
                <option>article</option>
                <option>video</option>
                <option>guide</option>
                <option>student-source</option>
              </select>
            </label>
          </div>

          <label className="mt-4 block font-bold">
            Tags
            <input
              className="mt-2 w-full rounded-2xl border border-purple-100 bg-white p-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white"
              placeholder="css, ux, nextjs"
            />
          </label>

          <label className="mt-4 block font-bold">
            URL
            <input
              type="url"
              className="mt-2 w-full rounded-2xl border border-purple-100 bg-white p-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white"
              placeholder="https://..."
            />
          </label>

          <label className="mt-4 block font-bold">
            Why is this useful?
            <textarea
              className="mt-2 min-h-36 w-full rounded-2xl border border-purple-100 bg-white p-3 text-[#17142a] dark:border-purple-900 dark:bg-[#0f0b1d] dark:text-white"
              placeholder="Explain why this source is helpful for other students."
            />
          </label>

          <button
            type="submit"
            className="mt-6 rounded-2xl bg-[#663399] px-6 py-3 font-bold text-white"
          >
            Submit for review
          </button>
        </form>
      </section>
    </main>
  );
}
