package com.weebsocial.server.domain;

import javax.persistence.*;

@Entity
public class GroupLike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long groupLikeId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_post_id")
    private GroupPost groupPost;

    public Long getGroupLikeId() {
        return groupLikeId;
    }

    public void setGroupLikeId(Long groupLikeId) {
        this.groupLikeId = groupLikeId;
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
}
