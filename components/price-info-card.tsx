import Image from "next/image";

interface Props {
  title: string;
  iconSrc: string;
  value: string;
}

const PriceInfoCard = ({ title, iconSrc, value }: Props) => {
  return (
    <div className="flex-1 min-w-[200px] flex flex-col gap-2 border-l-[3px] border-l-[#b6bdff] rounded-10 bg-[#F4F4F4] px-5 py-4">
      <p className="text-base text-[#3D4258]">{title}</p>
      <div className="flex gap-1">
        <Image src={iconSrc} alt={title} width={24} height={24} />
        <p className="text-2xl font-bold text-[#282828]">{value}</p>
      </div>
    </div>
  );
};

export default PriceInfoCard;
