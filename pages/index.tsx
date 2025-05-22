import { Sajupalja } from "@/components/Sajupalja";
import { SajupaljaMock } from "@/lib/SajupaljaMock";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-md bg-[#F3F2EF] overflow-hidden">
      <div className="relative w-full bg-gradient-to-b from-[#5B5247] to-[#937C5F]">
        <div className="z-0 absolute left-0 bottom-0 w-[100%] h-110 char-pentagon bg-gradient-to-b from-[#D1C3AB] to-[#B19C83] blur-2xl" />

        <div className="z-1 absolute top-0 left-1/2 transform -translate-x-1/2 w-[120%] flex flex-col items-center text-white text-[60px] tracking-[1.5rem] leading-normal opacity-15 blur-xs select-none whitespace-nowrap">
          <div>甲乙丙丁戊己</div>
          <div>庚辛壬癸子丑</div>
          <div>寅卯辰巳午未</div>
          <div>申酉戌亥甲乙</div>
          <div>甲乙丙丁戊己</div>
          <div>庚辛壬癸子丑</div>
          <div>寅卯辰巳午未</div>
          <div>申酉戌亥甲乙</div>
        </div>

        <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-[#000000] to-transparent" />

        <div className="z-5 relative w-full flex flex-col items-center gap-4 mx-auto pt-[5rem]">
          <div className="text-xl text-white">제 1장</div>

          <div className="relative flex w-full h-[20px]">
            
            <Image className="size-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/images/TitleIcon.svg" alt="Icon" width={100} height={100} />
          
          </div>

          <div className="text-xl text-white">나의 사주 팔자</div>
        </div>

        <div className="relative w-full h-[36rem] mt-16 overflow-hidden">
          <Image className="z-5 relative w-4/5 ml-auto" src="/images/캐릭터.png" alt="캐릭터" width={300} height={500} />

          <div className="z-6 absolute left-1/2 -translate-x-1/2 -bottom-4 w-[120%] h-30 bg-gradient-to-b from-[#F3F2EF]/30 to-[#F3F2EF]/100 blur-sm" />
        </div>

        <div className="z-10 absolute left-0 -bottom-30">
          <Image className="" src="/images/말풍선.svg" alt="말풍선" width={300} height={200} />

          <div className="w-2/3 absolute left-1/2 top-[calc(50%+0.8rem)] -translate-x-1/2 -translate-y-1/2 text-center">
            이제 본격적으로<br />OO님의 사주팔자를<br />분석해볼 차례네요.
          </div>
        </div>
      </div>

      <div className="relative w-full mt-32 mb-20 bg-[#F3F2EF]">
        <div className="flex gap-4 items-end pr-6">
          <Image className="pb-10" src="/images/길.svg" alt="길" width={200} height={300} />
          <Image src="/images/쓱쓱.svg" alt="쓱쓱" width={200} height={300} />
        </div>

        <div className="z-10 absolute top-60">
          <Image className="" src="/images/말풍선2.svg" alt="말풍선2" width={300} height={150} />

          <div className="w-2/3 absolute left-1/2 top-[calc(50%-0.8rem)] -translate-x-1/2 -translate-y-1/2 text-center">
            제가 oo님의 사주를<br />보기 쉽게 표로 정리했어요
          </div>
        </div>

        <div className="relative mt-10">
          <Image className="w-full" src="/images/표캐릭터.svg" alt="표캐릭터" width={500} height={400} />

          <div className="z-6 absolute left-1/2 -translate-x-1/2 -bottom-4 w-[120%] h-26 bg-gradient-to-b from-[#F3F2EF]/30 to-[#F3F2EF]/100 blur-sm" />
        </div>

        <Sajupalja />
      </div>
    </div>
  );
}
