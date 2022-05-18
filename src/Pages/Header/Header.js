import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-dev'>
                <Link className='' to='/addtask' as={Link}>Add
                    Task</Link>
                <Link to='/deletetask' as={Link}>Delete Task</Link>
            </div>

        </div>
    );
};

export default Header;





