import { useNotes } from "../../context/notes-context"
import { findNotesInArchive } from "../../utils/findNotesInArchive";
import { findNotesInBin } from "../../utils/findNotesInBin";

export const NotesCard = ({id,title,text,isPinned})=>{


    const {notesDispatch,archive,bin} = useNotes();

    const isNotesArchive = findNotesInArchive(archive,id)

    const isNotesInBin = findNotesInBin(bin,id)


    const onPinClick = (id) =>{
        !isPinned ? notesDispatch({
            type: 'PIN',
            payload: {id}
        }) :
        notesDispatch({
            type: 'UNPIN',
            payload: {id}
        })
    }

    const onArchiveClick = (id)=>{
      !isNotesArchive ? notesDispatch({
            type: 'ARCHIVE',
            payload: {id}
        }) :
        notesDispatch({
            type: 'REMOVE_FROM_ARCHIVE',
            payload: {id}
        })
    }

    const onBinClick = (id)=>{
        !isNotesInBin ? notesDispatch({
            type: 'ADD_IN_BIN',
            payload: {id}
        }) : 
        notesDispatch({
            type: 'REMOVE_FROM_BIN',
            payload: {id}
        })
    }
    
    return(
        <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%] border border-neutral-400 p-2 rounded-md" key={id}>
                                        <div className="flex justify-between border-b-2">
                                            <p>{title}</p>
                                            {
                                               isNotesInBin?<></> : !isNotesArchive ? <button onClick={() =>onPinClick(id)} ><span className={isPinned ? 'material-icons':'material-icons-outlined'}>push_pin</span></button>
                                                :<></>
                                            }
                                            
                                        </div>
                                        <div className="flex flex-col">
                                            <p>{text}</p>
                                            <div className="ml-auto">
                                                {
                                                    isNotesInBin ? <></> : <button onClick={()=>onArchiveClick(id)} ><span className={isNotesArchive ? 'material-icons':'material-icons-outlined'}>archive</span></button>
                                                }
                                            <button onClick={()=>onBinClick(id)}><span className={isNotesInBin ? 'material-icons':'material-icons-outlined'}>delete</span></button>
                                            </div>
                                        </div>
                                    </div>
    )
}