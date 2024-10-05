import React, { useEffect, useState } from "react";
import { getNotifications, markNotificationAsSeen } from "../../services/notificationService";
import { formatTimeAgo } from "../../utils/formatDate";
import { useNavigate } from "react-router-dom";

const NotificationList = ({ setShowModal }) => {
  const [notifications, setNotifications] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = await getNotifications();
      setNotifications(data);
    };
    fetchNotifications();
  }, []);

  const handleNotificationClick = async (notification) => {
    console.log(notification)

    // 읽음 처리
    if (!notification.seen) {
      await markNotificationAsSeen(notification._id);  // 알림 읽음 처리
      setNotifications((prev) =>
        prev.map((n) => (n._id === notification._id ? { ...n, seen: true } : n))
      );
    }
  
    // 알림의 유형에 따라 프로필로 이동
    if (notification.follow) {
      navigate(`/users/${notification.author._id}`);
    }
  
    // 모달 닫기
    setShowModal(false);
  };

  return (
    <div className="modal fade show" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">알림 목록</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowModal(false)}
            ></button>
          </div>
          <div className="modal-body">
            {notifications.length === 0 ? (
              <p>알림이 없습니다.</p>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification._id}
                  className="notification-item"
                  style={{
                    padding: "10px",
                    marginBottom: "10px",
                    borderBottom: "1px solid #ddd",
                    cursor: "pointer",
                    backgroundColor: notification.seen === "true" ? "rgba(0, 102, 255, 0.25)" : "white", // 읽음 여부에 따른 배경색
                  }}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <img
                    src={notification.author.image || `${import.meta.env.BASE_URL}images/defaultProfile.png`}
                    alt={notification.author.fullName}
                    style={{ width: 40, height: 40, borderRadius: "50%", marginRight: 10 }}
                  />
                    <span>
                      {notification.author.fullName}님이 팔로우했습니다.
                    </span>
                  <span style={{ float: "right" }}>
                    {formatTimeAgo(notification.createdAt)}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationList;
