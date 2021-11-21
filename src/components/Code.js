import Gist from "react-gist";

const Code = ({file}) => {

    return (
        <div>
            <Gist id={file} />
        </div>
    )
}

export default Code;