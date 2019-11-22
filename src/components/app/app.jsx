import React from 'react';
import {TodoItem} from '../todo-item';

export const App= () => {
    return (
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}