import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from './searchable-layout.module.css'
// SearchableLayout 컴포넌트: 검색 입력 필드를 제공하며 자식 컴포넌트를 감쌉니다.
export default function SearchableLayout({
    children,
}: {
    children: ReactNode;
}) {

    const [search, setSearch] = useState("");
    const router = useRouter();
    const q = router.query.q as string;

    // 쿼리 파라미터 'q'가 변경될 때 검색어 상태를 업데이트
    useEffect(() => {
        setSearch(q || "");
    }, [q]);

  // 검색 입력이 변경될 때 상태 업데이트
    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

  // 검색어가 있을 경우 or search string이 q와 동일하지 않을경우 검색 결과 페이지로 이동
    const onSubmit = () => {
        if (!search || search === q) return;
        router.push(`/search?q=${search}`);
    };

    // 엔터 키 입력 시 검색 실행
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
        onSubmit();
        }
    };

    // 검색 입력 필드와 버튼, 그리고 자식 컴포넌트를 렌더링
    return (
        <div>
            <div className={style.searchbar_container}>
                <input
                value={search}
                onChange={onChangeSearch}
                onKeyDown={onKeyDown}
                placeholder="검색어를 입력하세요 ..."
                />
                <button onClick={onSubmit}>검색</button>
            </div>
            {children}
        </div>
    );
}
