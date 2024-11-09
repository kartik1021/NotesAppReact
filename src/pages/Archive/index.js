import { Fragment } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { useNotes } from "../../context/notes-context";
import { NotesCard } from "../../components/NotesCard";

export const Archive = () => {
  const { archive } = useNotes();

  return (
    <Fragment>
      <Navbar />
      <main className="flex flex-col md:flex-row gap-3">
        <Sidebar />
        <div className="flex flex-col w-full mt-7 px-4 md:px-0">
          {archive?.length > 0 ? (
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {archive.map(({ id, title, text, isPinned }) => (
                <NotesCard
                  key={id}
                  id={id}
                  title={title}
                  text={text}
                  isPinned={isPinned}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10">
              No notes in the archive.
            </p>
          )}
        </div>
      </main>
    </Fragment>
  );
};
