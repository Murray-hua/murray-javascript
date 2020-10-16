
    
        // 创建cookie
        function createCookie(key,value,days) {
            let t = new Date();
            t.setDate(t.getDate() + days)
            document.cookie = `${key}=${value};expires=${t}`
        }


        // 获取cookie
        function getCookie(key) { 
            // 'school=中博; username=xiaoming; class=kw33'
            let arr = document.cookie.split("; ")
            // ["school=中博", "username=xiaoming", "class=kw33"]
            for (let i = 0; i < arr.length; i++) {
                let arr2 = arr[i].split("=")
                if (arr2[0] == key) {
                    return arr2[1]
                } 
            }
        }

        // 删除cookie
        function removeCookie(key) { 
            let t = new Date();
            t.setDate(t.getDate() - 1)
            document.cookie = `${key}=;expires=${t}`
        }
