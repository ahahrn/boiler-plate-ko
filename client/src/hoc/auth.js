import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { auth } from '../_actions/user_action'

export default function foo(SpecificComponent, option, adminRoute=null) {
    // option
    // null 아무나 출입가능한 페이지
    // true 로그인 한 사용자 출입 가능
    // false 로그인 한 사용자 출입 불가능
    function AuthenticationCheck(props) {

        const dispatch = useDispatch();

        useEffect(()=>{

            dispatch(auth()).then(response => {
                console.log(response)

                // 로그인 하지 않은 상태
                if (!response.payload.isAuth) {
                    if (option) {
                        props.history.push('/login')
                    }
                } else {
                    if (adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')  
                    } else {
                        if (!option) {
                            props.history.push('/')
                        }
                    }

                }
            })

        }, [])

        return (
            <SpecificComponent/>
        )

    }

    return AuthenticationCheck

}