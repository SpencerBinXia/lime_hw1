package com.limejotto.limej.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/profile")
public class profileController {

    @GetMapping
    public String home(Model model, HttpSession session)
    {
        return "profile";
    }

}