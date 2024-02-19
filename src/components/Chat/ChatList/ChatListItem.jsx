import "./ChatListItem.css";
const ChatList = () => {
    return (
        <div className="listItem d-flex flex-row w-auto">
            <div>
                <img
                    className="rounded-circle"
                    src="https://via.placeholder.com/150"
                    alt="John Doe"
                    width="50"
                />
            </div>
            <div className="ps-2">
                <div>
                    <span>John Doe</span>
                </div>
                <span
                    style={{
                        fontSize: '10px',
                    }}
                >
                    2 hours ago
                </span>
            </div>
        </div>
    );
};
export default ChatList;
