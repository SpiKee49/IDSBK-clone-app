import { HiOutlineShoppingCart } from 'react-icons/hi';

type Props = {
  zone: number;
  minutes: number;
  price: string;
};

function TableRow(props: Props) {
  const { zone, minutes, price } = props;
  return (
    <div className="flex flex-row w-full  py-2 [&>div]:pb-1  [&>div>span]:uppercase [&>div>span]:text-gray-400 [&>div>span]:text-[0.6rem] [&>div>span]:font-semibold [&>div>span]:tracking-tight [&>div>p]:font-semibold [&>div>p]:text-gray-800 [&>div>p]:text-xl [&>div>p]:-mt-1">
      <div className="flex flex-col gap-0 w-1/5 text-center">
        <span>zóny</span>
        <p>{zone}</p>
      </div>
      <div className="flex flex-col gap-0 w-1/6 text-center border-l-[1px]">
        <span>minúty</span>
        <p>{minutes}</p>
      </div>
      <div className="flex flex-col gap-0 flex-1 text-center border-l-[1px]">
        <span>zľavnený</span>
        <p>{price}</p>
      </div>
      <div className="flex justify-start w-1/6 items-center">
        <div className="flex justify-center items-center border-[1.5px] border-primary rounded-full w-8 h-8">
          <HiOutlineShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default TableRow;
