package kr.or.connect.reservation.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kr.or.connect.reservation.dto.Product;
import kr.or.connect.reservation.service.DisplayInfoService;
import kr.or.connect.reservation.service.ProductService;

@RestController
@RequestMapping(path = "/api/products")
public class ProductApiController {
	@Autowired
	private ProductService productService;
	@Autowired
	private DisplayInfoService displayInfoService;

	@GetMapping
	public Map<String, Object> getProduct(@RequestParam(defaultValue = "0") long categoryId,
			@RequestParam(defaultValue = "0") long start) {
		Map<String, Object> map = new HashMap<>();

		map.put("totalCount", productService.getProductCountAtCategory(categoryId));
		map.put("items", productService.getProductListAtCategory(categoryId, start));

		return map;
	}

	@GetMapping(path = "/{displayInfoId}")
	public Map<String, Object> getDisplayInfo(@PathVariable Long displayInfoId) {
		Map<String, Object> map = new HashMap<>();

		map.put("displayInfo", displayInfoService.getDisplayInfo(displayInfoId));
		map.put("productImages", displayInfoService.getProductImageList(displayInfoId));
		map.put("displayInfoImage", displayInfoService.getDisplayInfoImage(displayInfoId));
		map.put("comments", displayInfoService.getCommentList(displayInfoId));
		map.put("averageScore", displayInfoService.getAverageScore(displayInfoId));
		map.put("productPrices", displayInfoService.getProductPriceList(displayInfoId));

		return map;
	}
}
