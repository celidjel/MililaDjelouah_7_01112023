import arrow from '../../assets/images/collapse_arrow.svg';
import { useState } from 'react';
import '../../styles//collapse.css'

export default function Collapse({ title, content }) {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="collapse" >
            <div className='collapse__title' onClick={() => setCollapsed(!collapsed)} >
                {title}
                <img
                    className={collapsed ? 'arrow arrow_down' : 'arrow arrow_up'}
                    src={arrow}
                    alt="collapse arrow"
                />
            </div>
            <div className={collapsed ? 'collapse__content' : 'collapse__content hide'}>
                {content}
            </div>
        </div>
    )
}