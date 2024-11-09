import { Fragment } from "react"
import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"
import { useNotes } from "../../context/notes-context"
import { NotesCard } from "../../components/NotesCard"

export const Archive = ()=>{

    const { title, text, notes,archive ,notesDispatch } = useNotes();

    return (
        <Fragment>
        <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div className="flex flex-col w-screen mt-7"></div>
        <div className=" flex flex-wrap gap-4 w-screen mt-7">
            <div>{archive?.length > 0 &&
                  archive.map(({ id, title, text, isPinned }) => (
                    <NotesCard
                      key={id}
                      id={id}
                      title={title}
                      text={text}
                      isPinned={isPinned}
                    />
                  ))}</div>
              </div>
              </main>
        </Fragment>
    )
}