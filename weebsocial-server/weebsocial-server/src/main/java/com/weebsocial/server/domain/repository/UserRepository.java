package com.weebsocial.server.domain.repository;


import com.weebsocial.server.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Define additional query methods

    List<User> findByUsername(String username);
}
