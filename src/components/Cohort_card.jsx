// /components/cohort_card.jsx

const Cohort_card = ({ id, title, desc }) => {
  return (
    <>
      <div className="w-full p-2 flex flex-col text-white bg-black gap-y-4">
        <div className="flex flex-row w-full items-center gap-2">
          <div className="rounded-full py-2 px-4 border-t-1 border-b-[0.1px] border-t-[#B19F98] border-b-[rgba(177,159,152,0.5)] bg-[#431704]">
            {id}
          </div>
          <span className="font-serif font-bold text-2xl">{title}</span>
        </div>
        <div className="flex flex-col w-full">
          <p className="whitespace-normal">{desc[0]}</p>
          <p className="whitespace-normal">{desc[1]}</p>
        </div>
      </div>
    </>
  )
}

export default Cohort_card
