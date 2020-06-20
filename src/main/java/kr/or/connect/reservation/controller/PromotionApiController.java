package kr.or.connect.reservation.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.or.connect.reservation.dto.Promotion;
import kr.or.connect.reservation.service.PromotionService;

@RestController
@RequestMapping(path = "/api/promotions")
public class PromotionApiController {
	@Autowired
	private PromotionService promotionService;

	@GetMapping
	public Map<String, Object> promotionItems() {
		Map<String, Object> itemMap = new HashMap<String, Object>();
		itemMap.put("items", promotionService.getPromotionList());

		return itemMap;
	}

}
