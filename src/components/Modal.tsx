

type Props = {

    children: React.ReactNode

}

const Modal = ({ children }: Props) => {

    const closeModal = (e: React.MouseEvent): void => {
        const modal = document.querySelector("#modal")
        modal!.classList.add("hidden")
    }



  return (
    <div id="modal" className="hidden">
        <div 
         onClick={closeModal}
        className='w-full  h-screen absolute bg-black/25'>

        </div>
        <div 
       
        className='
        absolute
        top-[10%]
        left-0 
        right-0 
        m-auto 
        w-[700px] 
        h-[400px] 
        bg-white
        flex
        flex-col
        justify-center
        items-center
        
        '
        
        
        >
            <h2 className='mb-[1em]'>Texto modal</h2>
            {children}
        </div>
    </div>
  )
}

export default Modal