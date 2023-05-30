package com.weebsocial.server.domain;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class GroupPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long groupPostId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id")
    private Group group;

    private String content;
    private LocalDateTime dateCreated;

    @OneToMany(mappedBy = "groupPost", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<GroupComment> groupComments;

    @OneToMany(mappedBy = "groupPost", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<GroupLike> groupLikes;

    public Long getGroupPostId() {
        return groupPostId;
    }

    public void setGroupPostId(Long groupPostId) {
        this.groupPostId = groupPostId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
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
