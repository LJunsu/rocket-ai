import { SajupaljaMock } from "@/lib/SajupaljaMock"
import Image from "next/image"

export const Sajupalja = () => {

    return (
        <div className="z-10 relative w-[calc(100%-1.5rem)] bg-[#F5F3EC] -mt-6 px-1 mx-auto border-3 border-[#1B2F49] [box-shadow:0_3px_5px_rgba(0,0,0,0.4)]">
            <div className="absolute top-1 left-0 w-full border-t-1 border-[#1B2F49]" />

            <div className="w-[calc(100%-0.5rem)] absolute top-8 left-1/2 -translate-x-1/2 flex justify-between">
                <Image src="/images/구름.svg" alt="구름" width={70} height={50} />
                <Image src="/images/구름2.svg" alt="구름2" width={70} height={50} />
            </div>

            <div className="border-x-1 border-[#1B2F49]">
                <div className="flex flex-col gap-3 text-center pt-8 pb-6">
                    <span className="">김로켓님의 사주</span>
                    <span className="text-xl font-bold">1980년 8월27일 08:10</span>
                </div>

                <div className="w-[100%-1.5rem] pb-8 px-3">
                    <table className="table-fixed text-center text-sm w-full max-w-2xl mx-auto">
                        <thead>
                            <tr className="text-xl">
                                <th className="border p-2"></th>
                                <th className="border p-2">時</th>
                                <th className="border p-2">日</th>
                                <th className="border p-2">月</th>
                                <th className="border p-2">年</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr className="text-center bg-white">
                                <td className="border p-2 font-bold bg-[#F5F3EC]">
                                    <div className="font-bold">十星</div>
                                    <div className="text-xs">(십성)</div>
                                </td>

                                {SajupaljaMock[0].map((data) => (
                                    <td className="border p-2">
                                        <div className="font-bold">{data[0]}</div>
                                        <div className="text-xs">{data[1]}</div>
                                    </td>
                                ))}

                            </tr>

                            <tr className="text-center bg-white">
                                <td className="border p-2 font-bold bg-[#F5F3EC]">
                                    <div className="font-bold">天干</div>
                                    <div className="text-xs">(천간)</div>
                                </td>

                                {SajupaljaMock[1].map((data) => (
                                    <td className="border p-2">
                                        <div className="flex flex-col size-13 bg-[#2F2F2F] rounded-lg m-auto text-white *:flex *:justify-center *:items-center">
                                            <div className="text-[8px] h-1/3">{data[0]}</div>
                                            <div className="text-xl h-1/3">{data[1]}</div>
                                            <div className="text-[8px] h-1/3">{data[2]}</div>
                                        </div>
                                    </td>
                                ))}
                            </tr>

                            <tr className="text-center bg-white">
                                <td className="border p-2 font-bold bg-[#F5F3EC]">
                                    <div className="font-bold">地支</div>
                                    <div className="text-xs">(지지)</div>
                                </td>

                                {SajupaljaMock[2].map((data) => (
                                    <td className="border p-2">
                                        <div className="flex flex-col size-13 bg-[#2F2F2F] rounded-lg m-auto text-white *:flex *:justify-center *:items-center">
                                            <div className="text-[8px] h-1/3">{data[0]}</div>
                                            <div className="text-xl h-1/3">{data[1]}</div>
                                            <div className="text-[8px] h-1/3">{data[2]}</div>
                                        </div>
                                    </td>
                                ))}
                            </tr>

                            <tr className="text-center bg-white">
                                <td className="border p-2 font-bold bg-[#F5F3EC]">
                                    <div className="font-bold">十星</div>
                                    <div className="text-xs">(십성)</div>
                                </td>

                                {SajupaljaMock[3].map((data) => (
                                    <td className="border p-2">
                                        <div className="font-bold">{data[0]}</div>
                                        <div className="text-xs">{data[1]}</div>
                                    </td>
                                ))}
                            </tr>

                            <tr className="text-center bg-white">
                                <td className="border p-2 font-bold bg-[#F5F3EC]">
                                    <div className="font-bold">十二運星</div>
                                    <div className="text-xs">(십이운성)</div>
                                </td>

                                {SajupaljaMock[4].map((data) => (
                                    <td className="border p-2">
                                        <div className="font-bold">{data[0]}</div>
                                        <div className="text-xs">{data[1]}</div>
                                    </td>
                                ))}
                            </tr>

                            <tr className="text-center bg-white">
                                <td className="border p-2 font-bold bg-[#F5F3EC]">
                                    <div className="font-bold">十二神殺</div>
                                    <div className="text-xs">(십이신살)</div>
                                </td>

                                {SajupaljaMock[5].map((data) => (
                                    <td className="border p-2">
                                        <div className="font-bold">{data[0]}</div>
                                        <div className="text-xs">{data[1]}</div>
                                    </td>
                                ))}
                            </tr>

                            <tr className="text-center bg-white">
                                <td className="border p-2 font-bold bg-[#F5F3EC]">
                                    <div className="font-bold">貴人</div>
                                    <div className="text-xs">(귀인)</div>
                                </td>

                                {SajupaljaMock[6].map((data) => (
                                    <td className="border p-2">
                                        <div className="font-bold">{data[0]}</div>
                                        <div className="text-xs">{data[1] ? data[1]: "(없음)"}</div>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div className="absolute bottom-1 left-0 w-full border-b-1 border-[#1B2F49]" />
        </div>
    )
}