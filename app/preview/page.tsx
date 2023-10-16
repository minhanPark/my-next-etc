"use client";

import { useForm } from "react-hook-form";
import { decode } from "html-entities";

const bookmarks = [
  {
    id: 1,
    title: "&quot;수원 요양병원 궁금&quot; : 네이버 전체글검색",
    description: "만남의 시작 네이버 카페",
    url: "https://search.naver.com/search.naver?date_option=0&prdtype=0&query=%22%EC%88%98%EC%9B%90+%EC%9A%94%EC%96%91%EB%B3%91%EC%9B%90+%EA%B6%81%EA%B8%88%22&sm=mtb_opt&st=rel&stnm=date&where=article&opt_tab=0&nso=so:dd,p:all&date_from=20230718&date_to=20230718",
    icon: "https://ssl.pstatic.net/sstatic/search/favicon/favicon_191118_pc.ico",
    image: "https://ssl.pstatic.net/sstatic/search/common/og_v3.png",
  },
  {
    id: 2,
    title:
      "나의 유방상피내암 일기 6 - 수술후 조직검사 결과, 요양병원 입원 후기.",
    description:
      "수술 후 약 일주일 뒤.. 최종 조직검사 결과를 들으러 갔다...두구두구두구 !!!!!최종 상피내암인걸로!!!!!...",
    url: "https://blog.naver.com/haewon2367/223187005741",
    icon: "http://blog.naver.com//favicon.ico?3",
    image:
      "https://blogthumb.pstatic.net/MjAyMzA4MThfMzgg/MDAxNjkyMzM0OTExOTM5.9Tm2ciVV9ysBhmtbxxPzm-7WUf1StiiuLa13miEVtiEg.mkA8VJNFVMn1PeF5QDSCCuGuHE5zv8nbJAcRbXQ5k0kg.JPEG.haewon2367/1692334908397.jpg?type=w2",
  },
  {
    id: 3,
    title:
      "&#xd3b8;&#xc2a4;&#xd1a0;&#xb791; SNS &#xacf5;&#xc2dd;&#xacc4;&#xc815; on Instagram: &quot;&#x1f37d;&#xc724;&#xc2ac;&#xb9d8; &#xd55c;&#xc9c0;&#xd61c; &#x2013; &#xb2f9;&#xadfc; &#xc2a4;&#xd14c;&#xc774;&#xd06c;",
    description:
      "1,607 likes, 15 comments - funstaurant_kbs on September 22, 2023: &quot;&#x1f37d;&#xc724;&#xc2ac;&#xb9d8; &#xd55c;&#xc9c0;&#xd61c; &#x2013; &#xb2f9;&#xadfc; &#xc2a4;&#xd14c;&#xc774;&#xd06c;",
    url: "https://www.instagram.com/p/CxfsVWzpwIO/?igshid=MzRlODBiNWFlZA==",
    icon: "https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico",
    image:
      "https://scontent.cdninstagram.com/v/t51.29350-15/380844610_336106052204794_6251321151938971954_n.jpg?stp=c161.0.486.485a_dst-jpg_s640x640&amp;_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=mzIOwCNMHqoAX_AI2J5&amp;_nc_ht=scontent.cdninstagram.com&amp;oh=00_AfDydyCpzeLFFfu9jdgcUFCBvbzicMsW3w8OxrqZxx3upQ&amp;oe=6520AA2C",
  },
];

export default function Page() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      url: "",
    },
  });
  const onValid = (data: { url: string }) => {
    fetch("/api/preview", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("url")} />
        <button>제출</button>
      </form>
      <hr />
      <p>
        &#xd3b8;&#xc2a4;&#xd1a0;&#xb791; SNS &#xacf5;&#xc2dd;&#xacc4;&#xc815;
      </p>
      <div className="p-3">
        {bookmarks.map((bookmark) => (
          <div
            className="w-full bg-white border border-gray-200 rounded-sm shadow flex h-28 mb-2"
            key={bookmark.id}
          >
            <div className=" flex-1 p-3 overflow-hidden">
              <h3 className=" text-sm font-bold">{decode(bookmark.title)}</h3>
              <p className="mt-2 text-[13px] h-9 overflow-hidden text-gray-500">
                {decode(bookmark.description)}
              </p>
              <div className="flex items-center mt-1">
                <img className="w-4 h-4 mr-1" src={bookmark.icon} />
                <div className="text-[13px] text-ellipsis whitespace-nowrap overflow-hidden">
                  {bookmark.url}
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <img
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                src={decode(bookmark.image)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
