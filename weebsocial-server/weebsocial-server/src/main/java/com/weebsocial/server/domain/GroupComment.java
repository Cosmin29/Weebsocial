package com.weebsocial.server.domain;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class GroupComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long groupCommentId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_post_id")
    private GroupPost groupPost;

    private String content;
    private LocalDateTime dateCreated;

    public Long getGroupCommentId() {
        return groupCommentId;
    }

    public void setGroupCommentId(Long groupCommentId) {
        this.groupCommentId = groupCommentId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public GroupPost getGroupPost() {
        return groupPost;
    }

    public void setGroupPost(GroupPost groupPost) {
        this.groupPost = groupPost;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }
}
