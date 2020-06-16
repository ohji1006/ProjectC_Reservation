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
import kr.or.connect.reservation.service.ProductService;

@RestController
@RequestMapping(path = "/api/products")
public class ProductApiController {
	@Autowired
	private ProductService productService;

	private long getProductCount(long categoryId) {
		return productService.getProductCountAtCategory(categoryId);
	}

	private List<Product> getProductList(long categoryId, long start) {
		return productService.getProductListAtCategory(categoryId, start);
	}

	@GetMapping
	public Map<String, Object> getProduct(@RequestParam(defaultValue = "0") long categoryId,
			@RequestParam(defaultValue = "0") long start) {
		Map<String, Object> map = new HashMap<>();
		map.put("totalCount", getProductCount(categoryId));
		map.put("items", getProductList(categoryId, start));
		return map;
	}

	@GetMapping(path = "/{displayInfoId}")
	public Map<String, Object> testDisplayInfoId(@PathVariable long displayInfoId) {
		Map<String, Object> map = new HashMap<>();
		map.put("displayInfoId", displayInfoId);

		return null;
	}
}
