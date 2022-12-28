import React from 'react';
import Myinput from "./UI/input/Myinput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <Myinput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder={"Поиск..."}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
                defaultValue={"Сортировка"}
                options={[
                    {value:"title", name:"Сортировка по названию"},
                    {value:"body", name:"Сортировка по описанию"}
                ]
                }
            />
        </div>
    );
};

export default PostFilter;