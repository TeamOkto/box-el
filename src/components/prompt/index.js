import '../../Chat.css';


export const Prompt = (props) => {

    const dateConverter = new Date(props.timestamp * 1000).toISOString();

    return(
        <div className="prompt">
            {dateConverter}
        </div>
    )
}