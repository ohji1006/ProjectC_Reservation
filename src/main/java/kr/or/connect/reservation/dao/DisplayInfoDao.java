package kr.or.connect.reservation.dao;

import static kr.or.connect.reservation.sql.DisplayInfoSql.*;
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

import kr.or.connect.reservation.dto.Comment;
import kr.or.connect.reservation.dto.CommentImage;
import kr.or.connect.reservation.dto.DisplayInfo;
import kr.or.connect.reservation.dto.DisplayInfoImage;
import kr.or.connect.reservation.dto.ProductImage;
import kr.or.connect.reservation.dto.ProductPrice;

@Repository
public class DisplayInfoDao {
	private NamedParameterJdbcTemplate jdbcTemplate;

	private RowMapper<DisplayInfo> displayInfoMapper = BeanPropertyRowMapper.newInstance(DisplayInfo.class);
	private RowMapper<ProductImage> productImageMapper = BeanPropertyRowMapper.newInstance(ProductImage.class);
	private RowMapper<DisplayInfoImage> displayInfoImagMapper = BeanPropertyRowMapper
			.newInstance(DisplayInfoImage.class);
	private RowMapper<ProductPrice> productPriceMapper = BeanPropertyRowMapper.newInstance(ProductPrice.class);
	private RowMapper<Comment> commentMapper = BeanPropertyRowMapper.newInstance(Comment.class);
	private RowMapper<CommentImage> commentImageMapper = BeanPropertyRowMapper.newInstance(CommentImage.class);

	public DisplayInfoDao(DataSource dataSource) {
		jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	public DisplayInfo selectDisplayInfo(long displayInfoId) {
		Map<String, Long> paramMap = new HashMap<String, Long>();
		paramMap.put("displayInfoId", displayInfoId);

		return jdbcTemplate.queryForObject(SELECT_DISPLAY_INFO, paramMap, displayInfoMapper);
	}

	public List<ProductImage> selectProductImage(long displayInfoId, long limit) {
		Map<String, Long> paramMap = new HashMap<String, Long>();
		paramMap.put("displayInfoId", displayInfoId);
		paramMap.put("limit", limit);

		return jdbcTemplate.query(SELECT_PRODUCT_IMAGE, paramMap, productImageMapper);
	}

	public DisplayInfoImage selectDisplayInfoImage(long displayInfoId) {
		Map<String, Long> paramMap = new HashMap<String, Long>();
		paramMap.put("displayInfoId", displayInfoId);

		return jdbcTemplate.queryForObject(SELECT_DISPLAY_INFO_IMAGE, paramMap, displayInfoImagMapper);
	}

	public List<ProductPrice> selectProductPrice(long displayInfoId) {
		Map<String, Long> paramMap = new HashMap<String, Long>();
		paramMap.put("displayInfoId", displayInfoId);

		return jdbcTemplate.query(SELECT_PRODUCT_PRICE, paramMap, productPriceMapper);
	}

	public List<Comment> selectComment(long displayInfoId) {
		Map<String, Long> paramMap = new HashMap<String, Long>();
		paramMap.put("displayInfoId", displayInfoId);

		return jdbcTemplate.query(SELECT_COMMENT, paramMap, commentMapper);
	}

	public List<CommentImage> selectCommentImage(long userCommnetId) {
		Map<String, Long> paramMap = new HashMap<String, Long>();
		paramMap.put("userCommnetId", userCommnetId);

		return jdbcTemplate.query(SELECT_COMMENT_IMAGE, paramMap, commentImageMapper);
	}

	public List<Double> selectScore(long displayInfoId) {
		Map<String, Long> paramMap = new HashMap<String, Long>();
		paramMap.put("displayInfoId", displayInfoId);

		return jdbcTemplate.queryForList(SELECT_SCORE, paramMap, Double.class);
	}
}
