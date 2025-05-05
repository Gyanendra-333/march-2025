import React from 'react'
import { useAppContext } from '../../context/AppContext'

const SellerLogin = () => {
    const { isSeller, setIsSeller, navigate } = useAppContext();

    return (
        <div>SellerLogin</div>
    )
}

export default SellerLogin;