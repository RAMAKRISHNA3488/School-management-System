package com.school.management.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "students")
@Data
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private boolean isApproved = false;
    
    @ManyToOne
    @JoinColumn(name = "class_id")
    private ClassRoom classRoom;
<<<<<<< HEAD

    public Student() {

    }

    public Student(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.isApproved = false;
        this.classRoom = new ClassRoom();
    }

    public Long getId(Long id) {
        return id;
    }

=======
>>>>>>> 5275d5695f3ce52e16f80362a1fb0bb3568fd146

}
