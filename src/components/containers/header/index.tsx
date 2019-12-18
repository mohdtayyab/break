import * as React from 'react';

import './index.scss';
import {Link} from "react-router-dom";
import {PlayerSticker} from "../../presentational/player-sticker";
const logo = require('../../../shared/images/logo.svg');

export default class Header extends React.Component {

    render() {
        return (
            <header className={'header-wrapper'}>
                <div className={'container'}>
                    <Link to={'/'} className={'logo'}>
                        <img src={logo} alt="solana"/>
                    </Link>
                    {/*<PlayerSticker name={'Justin'}/>*/}
                </div>
            </header>
        );
    }
}


