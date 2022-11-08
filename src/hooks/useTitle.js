import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `photo-Henter-${title}`;
    }, [title])
}

export default useTitle;