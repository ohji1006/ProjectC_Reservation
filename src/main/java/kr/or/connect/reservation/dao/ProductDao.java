package kr.or.connect.reservation.dao;

import static kr.or.connect.reservation.sql.ProductSql.*;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import kr.or.connect.reservation.dto.Product;

@Repository
public class ProductDao {
	private NamedParameterJdbcTemplate jdbcTemplate;
	private RowMapper<Product> rowMapper = BeanPropertyRowMapper.newInstance(Product.class);

	public ProductDao(DataSource dataSource) {
		jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	public List<Product> selectAll(Long start, Long limit) {
		Map<String, Long> paramMap = new HashMap<String, Long>();
		paramMap.put("start", start);
		paramMap.put("end", limit);

		return jdbcTemplate.query(SELECT_ALL_PRODUCT, paramMap, rowMapper);
	}

	public List<Product> selectAllAtCategory(long categoryId, long start, long limit) {
		Map<String, Long> paramMap = new HashMap<String, Long>();
		paramMap.put("start", start);
		paramMap.put("end", limit);
		paramMap.put("categoryId", categoryId);

		return jdbcTemplate.query(SELECT_SPECIFIC_CATEGORY_PRODUCT, paramMap, rowMapper);
	}

	public long selectCount() {
		return jdbcTemplate.queryForObject(SELECT_COUNT, Collections.emptyMap(), Long.class);
	}

	public long selectCountAtCategory(long categoryId) {
		Map<String, Long> paramMap = new HashMap<String, Long>();
		paramMap.put("categoryId", categoryId);

		return jdbcTemplate.queryForObject(SELECT_COUNT_SPECIFIC_CATEGORY_PRODUCT, paramMap, Long.class);
	}
}
